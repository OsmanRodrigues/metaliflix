import React from 'react';
import { VideoCardContainer } from './styles';
import { getYouTubeId } from '../../../../utils/utils';

const VideoCard = ({ videoTitle, videoURL, categoryColor, cardKey }) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      key={cardKey}
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
}
export default VideoCard;
