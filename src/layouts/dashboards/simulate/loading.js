import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Loading = () => {
  return <Box sx={{ width: '100%' }}>
            <LinearProgress />
             <LinearProgress />
             <LinearProgress />
             <LinearProgress />
             <LinearProgress />
    
        </Box>
};

export default Loading;


