import { availableLanguages } from '../utils/languages/available-languages';
import LanguageSelectorDropdown from '../theme/language-selector-dropdown';
import ColorModeIconDropdown from '../theme/mode-icon-dropdown';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { StyledToolbar } from '../utils/styles/styled-toolbar';
import { Language } from '../utils/types/language-types';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function AppAppBar() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const currentLanguageCode = i18n.language;
  const currentLanguage = availableLanguages.find(l => l.code === currentLanguageCode) || availableLanguages[0];

  const handleLanguageChange = (newLanguage: Language) => {
    i18n.changeLanguage(newLanguage.code);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 80; // Adjust this value to perfectly match your app bar's height

    if (sectionElement) {
      const elementPosition = sectionElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AppBar position="fixed" enableColorOnDark sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 'calc(var(--template-frame-height, 0px) + 28px)' }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            {/*<SitemarkIcon />*/}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small" onClick={() => scrollToSection('features')}>{t('app-bar.projects')}</Button>
              <Button variant="text" color="info" size="small" onClick={() => scrollToSection('principles')}>{t('app-bar.principles')}</Button>
              <Button variant="text" color="info" size="small" onClick={() => scrollToSection('testimonials')}>{t('app-bar.testimonials')}</Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} onClick={() => scrollToSection('faq')}>{t('app-bar.faq')}</Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <LanguageSelectorDropdown selectedLanguage={currentLanguage} availableLanguages={availableLanguages} onChange={handleLanguageChange} />
            <ColorModeIconDropdown />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center'}}>
            <LanguageSelectorDropdown selectedLanguage={currentLanguage} availableLanguages={availableLanguages} onChange={handleLanguageChange} />
            <ColorModeIconDropdown />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)} sx={{ minWidth: 0, p: '4px' }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem onClick={() => { scrollToSection('features'); toggleDrawer(false)(); }}>{t('app-bar.projects')}</MenuItem>
                <MenuItem onClick={() => { scrollToSection('principles'); toggleDrawer(false)(); }}>{t('app-bar.principles')}</MenuItem>
                <MenuItem onClick={() => { scrollToSection('download'); toggleDrawer(false)(); }}>{t('app-bar.download')}</MenuItem>
                <MenuItem onClick={() => { scrollToSection('latest'); toggleDrawer(false)(); }}>{t('app-bar.latest')}</MenuItem>
                <MenuItem onClick={() => { scrollToSection('testimonials'); toggleDrawer(false)(); }}>{t('app-bar.testimonials')}</MenuItem>
                <MenuItem onClick={() => { scrollToSection('faq'); toggleDrawer(false)(); }}>{t('app-bar.faq')}</MenuItem>
              </Box>
            </Drawer>
          </Box>

        </StyledToolbar>
      </Container>
    </AppBar>
  );
}