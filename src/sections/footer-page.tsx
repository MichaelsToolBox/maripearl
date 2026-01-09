import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import { YouTube } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function Footer() {
  // i18n Translation
  const { t } = useTranslation()

  const youtubeLink = 'https://www.youtube.com/@GiftBytesProductions?sub_confirmation=1'

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 4, sm: 8 }, py: { xs: 8, sm: 10 }, textAlign: { sm: 'center', md: 'left' }}}>
      <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, width: '100%', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4, minWidth: { xs: '100%', sm: '60%' }}}>
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
{}            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2, mb: 4 }}>
              {t("footer-page.left-title")}
            </Typography>
              <Button variant="contained" color="primary" size="medium" onClick={() => { window.open( youtubeLink , '_blank', 'noopener,noreferrer'); }}>
                {t("footer-page.left-button")}
              </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', pt: { xs: 4, sm: 8 }, width: '100%', borderTop: '1px solid', borderColor: 'divider'}}>
        <div>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {t("footer-page.copyright")}
            <Link color="text.secondary" href="https://www.youtube.com/@GiftBytesProductions">
            {t("footer-page.giftbytes")}
            </Link>
            &nbsp;
            {new Date().getFullYear()}
          </Typography>
        </div>
        <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: 'left', color: 'text.secondary' }}>
          <IconButton
            color="inherit"
            size="large"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="large"
            href="https://www.youtube.com/@GiftBytesProductions"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <YouTube />
          </IconButton>
          <IconButton
            color="inherit"
            size="large"
            href="https://www.linkedin.com/in/michael-schenk-a8209858/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
