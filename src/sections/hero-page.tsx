import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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
  padding: '8px',
};

export default function Hero() {
  // i18n Translation hook
  const { t } = useTranslation();

  // State to track the currently selected image
  // null = modal is closed
  // We explicitly tell TypeScript this state can be a string (URL) or null
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handlers to open and close the modal
  const handleOpen = (imgUrl: string) => setSelectedImage(imgUrl);
  const handleClose = () => setSelectedImage(null);

  // Array of your specific images from the public folder
  // based on your screenshot (0.jpg to 7.jpg)
  const imageUrls = [
    '/0.jpg',
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
  ];

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
              paddingBottom: '16px',
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
                width: '33.3333%', // 3 items per row
                padding: (theme) => theme.spacing(1),
                boxSizing: 'border-box',
                cursor: 'pointer',
              }}
              onClick={() => handleOpen(url)}
            >
              <Box
                component="img"
                src={url}
                alt={`gallery image ${index}`}
                sx={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16/9', // Keeps them uniform
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
        open={Boolean(selectedImage)}
        onClose={handleClose}
        aria-labelledby="image-modal"
      >
        <Box sx={modalStyle}>
          {/* Only render the image if selectedImage is set */}
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Expanded view"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '4px',
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}