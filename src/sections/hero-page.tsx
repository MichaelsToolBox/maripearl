import { SetStateAction, useState } from 'react'; // Import useState
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'; // Import Modal

// Import the single image from its path inside 'src'
import testImage from '../utils/styles/IMG_6078.JPG';

// --- Style for the modal content ---
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vw',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '8px',
  outline: 'none',
  padding: '8px', // Add some padding
};

export default function Hero() {
  // i18n Translation hook
  const { t } = useTranslation();

  // State to track the currently selected image
  // null = modal is closed
  const [selectedImage, setSelectedImage] = useState(null);

  // Handlers to open and close the modal
  const handleOpen = (imgUrl: SetStateAction<null>) => setSelectedImage(imgUrl);
  const handleClose = () => setSelectedImage(null);

  // Changed to 9 items (3 rows * 3 images)
  const imageUrls = Array(9).fill(testImage);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          {/* ...Typography section (unchanged)... */}
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            {t('hero-page.gift')}&nbsp;{t('hero-page.bytes')}&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', { color: 'primary.light' }),
              })}
            >
              {t('hero-page.productions')}
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            {t('hero-page.subtitle')}
          </Typography>
        </Stack>

        {/* --- Image Grid (Flexbox Box) --- */}
        <Box
          sx={{
            mt: 8,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            margin: (theme) => theme.spacing(-1),
          }}
        >
          {imageUrls.map((url, index) => (
            <Box
              key={index}
              sx={{
                width: '33.3333%',
                padding: (theme) => theme.spacing(1),
                boxSizing: 'border-box',
                cursor: 'pointer', // Add cursor to show it's clickable
              }}
              onClick={() => handleOpen(url)} // Add onClick handler
            >
              <Box
                component="img"
                src={url}
                alt={`test image ${index + 1}`}
                sx={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: (theme) =>
                    theme.palette.mode === 'dark'
                      ? '0 4px 12px rgba(0,0,0,0.4)'
                      : '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
        {/* --- Image Grid Ends --- */}
      </Container>

      {/* --- Modal for Expanded Image --- */}
      <Modal
        open={Boolean(selectedImage)} // Modal is open if selectedImage is not null
        onClose={handleClose} // Close modal on backdrop click
        aria-labelledby="image-modal"
      >
        <Box sx={modalStyle}>
          <Box
            component="img"
            src={selectedImage} // Show the selected image
            alt="Expanded view"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '85vh', // Ensure image fits in the viewport
              objectFit: 'contain', // Show full image without distortion
              borderRadius: '4px', // Match inner box
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
}