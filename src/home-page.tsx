import Testimonials from './sections/testimonials-page';
import CssBaseline from '@mui/material/CssBaseline';
import Principles from './sections/principles-page';
import AppAppBar from './sections/app-bar-page';
import Features from './sections/features-page';
import Divider from '@mui/material/Divider';
import Footer from './sections/footer-page';
import AppTheme from './theme/app-theme';
import Hero from './sections/hero-page';
import FAQ from './sections/faq-page';
import Box from '@mui/material/Box';

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      {/*<LogoCollection />*/}
      <Box id="features"><Features/></Box>
      <Divider />
      <Box id="principles"><Principles/></Box>
      {/*<Download />*/}
      {/*<Box id="latest"><Latest/></Box>*/}
      <Divider/>
      <Box id="testimonials"><Testimonials/></Box>
      <Divider />
      <Box id="faq"><FAQ/></Box>
      <Divider />
      <Footer />
    </AppTheme>
  );
}
