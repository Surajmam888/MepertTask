import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import StoriesList from './Components/StoriesList';
import TabbedInterface from './Components/TabbedInterface';
import Homepage from './Components/Homepage';

function App() {
  return (
    <Box>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/storieslist" element={<StoriesList />} />
        <Route path="/tabbedinterface" element={<TabbedInterface />} />
      </Routes>
    </Box>
  );
}

export default App;
