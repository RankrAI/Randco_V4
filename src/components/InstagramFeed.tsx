import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import LazyImage from './LazyImage';

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: string;
  caption?: string;
  permalink: string;
  timestamp: string;
}

interface InstagramFeedProps {
  limit?: number;
  columns?: number;
  showCaption?: boolean;
  className?: string;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ 
  limit = 6, 
  columns = 6, 
  showCaption = false,
  className = "" 
}) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Using verified existing images for Instagram feed
  const mockPosts: InstagramPost[] = [
    {
      id: '1',
      media_url: '/images/bridal-showers/LandingPage.jpg',
      media_type: 'IMAGE',
      caption: 'Beautiful bridal shower setup for Sarah! 💕 #bridalshower #balloons #randcoevents',
      permalink: 'https://instagram.com/p/example1',
      timestamp: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      media_url: '/images/corporate/20210721_155342.jpg',
      media_type: 'IMAGE',
      caption: 'Corporate event magic ✨ #corporate #events #balloonart',
      permalink: 'https://instagram.com/p/example2',
      timestamp: '2024-01-14T15:30:00Z'
    },
    {
      id: '3',
      media_url: '/images/baby-showers/IMG_0796.JPEG',
      media_type: 'IMAGE',
      caption: 'Sweet baby shower vibes 👶 #babyshower #balloons #toronto',
      permalink: 'https://instagram.com/p/example3',
      timestamp: '2024-01-13T12:00:00Z'
    },
    {
      id: '4',
      media_url: '/images/birthdays/IMG_2972.jpg',
      media_type: 'IMAGE',
      caption: 'Birthday party perfection! 🎉 #birthday #celebration #ballooninstallation',
      permalink: 'https://instagram.com/p/example4',
      timestamp: '2024-01-12T18:45:00Z'
    },
    {
      id: '5',
      media_url: '/images/holidays/339661EC-7B8C-4F55-BD25-280CF2E61A29.jpg',
      media_type: 'IMAGE',
      caption: 'Holiday celebration magic ✨ #holidays #balloons #luxury',
      permalink: 'https://instagram.com/p/example5',
      timestamp: '2024-01-11T14:20:00Z'
    },
    {
      id: '6',
      media_url: '/images/birthdays/IMG_2705.JPG',
      media_type: 'IMAGE',
      caption: 'Behind the scenes magic 🎈 #bts #balloonart #randcoevents',
      permalink: 'https://instagram.com/p/example6',
      timestamp: '2024-01-10T11:15:00Z'
    },
    {
      id: '7',
      media_url: '/images/corporate/20210816_183032.jpg',
      media_type: 'IMAGE',
      caption: 'Corporate gala elegance! 💼✨ #corporateevents #balloons #toronto',
      permalink: 'https://instagram.com/p/example7',
      timestamp: '2024-01-09T16:30:00Z'
    },
    {
      id: '8',
      media_url: '/images/birthdays/IMG_2939.JPG',
      media_type: 'IMAGE',
      caption: 'Stunning birthday celebration 🌟 #birthday #balloons #events',
      permalink: 'https://instagram.com/p/example8',
      timestamp: '2024-01-08T13:45:00Z'
    }
  ];

  useEffect(() => {
    // Simulate API call with reduced delay for better performance
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Reduced delay for faster loading
        await new Promise(resolve => setTimeout(resolve, 300));
        
        setPosts(mockPosts.slice(0, limit));
        setError(null);
      } catch (err) {
        setError('Failed to load Instagram posts');
        console.error('Instagram API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  };

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-4`}>
          {Array.from({ length: limit }).map((_, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <Instagram className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 font-sans">Unable to load Instagram posts</p>
        <a 
          href="https://instagram.com/randco.events" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-gold-600 hover:text-gold-700 font-sans font-medium mt-2"
        >
          Visit @randco.events
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-4`}>
        {posts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <a 
              href={post.permalink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="aspect-square overflow-hidden rounded-lg relative">
                <LazyImage
                  src={post.media_url}
                  alt={post.caption?.substring(0, 100) || 'Instagram post from @randco.events'}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                  width="400"
                  height="400"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              {showCaption && post.caption && (
                <p className="mt-2 text-sm text-charcoal-600 font-sans line-clamp-2">
                  {post.caption}
                </p>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;