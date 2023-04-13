import React from 'react';

interface MessageErrorProps {
  errors: string[];
}

const MessageError = ({ errors }: MessageErrorProps) => {
  return <div style={{ color: '#EA1A4F' }}>{errors}</div>;
};

export default MessageError;
