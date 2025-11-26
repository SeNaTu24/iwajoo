import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface EmbeddedVideoPlayerProps {
    url: string;
    title: string;
    description: string;
    uploadDate: string; // ISO 8601 format
    duration: string; // ISO 8601 format
}

const getYouTubeVideoId = (url: string): string | null => {
    if (!url) return null;
    const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
};

const EmbeddedVideoPlayer: React.FC<EmbeddedVideoPlayerProps> = ({
    url,
    title,
    description,
    uploadDate,
    duration,
}) => {
    const [hasWindow, setHasWindow] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    const videoId = getYouTubeVideoId(url);
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    const thumbnailUrl = videoId
        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        : "";

    const videoSeoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: title,
        description: description,
        thumbnailUrl: thumbnailUrl,
        uploadDate: uploadDate,
        duration: duration,
        embedUrl: embedUrl,
    };

    return (
        <Card
            className="w-full overflow-hidden rounded-lg shadow-lg"
            itemScope
            itemType="https://schema.org/VideoObject"
        >
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="uploadDate" content={uploadDate} />
            <meta itemProp="duration" content={duration} />
            <meta itemProp="thumbnailUrl" content={thumbnailUrl} />
            <meta itemProp="embedUrl" content={embedUrl} />

            <CardHeader>
                <CardTitle itemProp="name">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="aspect-video w-full rounded-md overflow-hidden border relative">
                    {hasWindow ? (
                        <>
                            {!isLoaded && thumbnailUrl && (
                                <div 
                                    className="absolute inset-0 bg-cover bg-center cursor-pointer"
                                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                                    onClick={() => setIsLoaded(true)}
                                >
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                                            <div className="w-0 h-0 border-l-[20px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {(isLoaded || !thumbnailUrl) && (
                                <iframe
                                    src={embedUrl}
                                    title={title}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    onLoad={() => setIsLoaded(true)}
                                />
                            )}
                        </>
                    ) : (
                        <Skeleton className="w-full h-full" />
                    )}
                </div>
                <p
                    className="mt-4 text-muted-foreground"
                    itemProp="description"
                >
                    {description}
                </p>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(videoSeoSchema),
                    }}
                />
            </CardContent>
        </Card>
    );
};

export default EmbeddedVideoPlayer;
