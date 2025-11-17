import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';
import { keyframes } from '@mui/material/styles';

// --- ICONS ---
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import TabletMacRoundedIcon from '@mui/icons-material/TabletMacRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';

// --- DYNAMIC ANIMATION KEYFRAMES ---
const shake = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
`;

const intenseGlow = keyframes`
  0% { box-shadow: 0 0 10px 0px hsla(210, 100%, 50%, 0.5); }
  50% { box-shadow: 0 0 40px 15px hsla(210, 100%, 50%, 0.8); }
  100% { box-shadow: 0 0 10px 0px hsla(210, 100%, 50%, 0.5); }
`;

const orbit = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-200px, -25px) scale(1.1); }
  50% { transform: translate(0, 160px) scale(0.9); }
  75% { transform: translate(200px, -100px) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
`;

const shockwave = keyframes`
  0% { transform: scale(0.5); opacity: 0.7; }
  100% { transform: scale(4); opacity: 0; }
`;

// --- CUSTOM VISUAL COMPONENTS ---
const CostVisual = () => (
  <Box sx={{ position: 'relative', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Box sx={{
      position: 'absolute',
      width: '80px',
      height: '80px',
      borderRadius: '100%',
      border: '3px solid',
      borderColor: 'primary.main',
      animation: `${shockwave} 2s ease-out infinite`,
    }} />
      <PriceCheckRoundedIcon color="primary" sx={{ fontSize: '5rem', animation: `${shake} 1s linear infinite` }}/>
  </Box>
);

const DevicesVisual = () => (
  <Box sx={{ position: 'relative', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Box
      sx={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: `${intenseGlow} 2s ease-in-out infinite`,
      }}
    >
      <AutoAwesomeRoundedIcon color="primary" sx={{ fontSize: '3rem', zIndex: 1 }}/>
    </Box>
    <DesktopWindowsRoundedIcon sx={{ position: 'absolute', fontSize: '5rem', color: 'text.secondary', opacity: 0.7, animation: `${orbit} 10s linear infinite`, animationDelay: '0s' }} />
    <TabletMacRoundedIcon sx={{ position: 'absolute', fontSize: '4rem', color: 'text.secondary', opacity: 0.7, animation: `${orbit} 8s linear infinite reverse`, animationDelay: '1s' }} />
    <PhoneIphoneRoundedIcon sx={{ position: 'absolute', fontSize: '3rem', color: 'text.secondary', opacity: 0.7, animation: `${orbit} 9s linear infinite`, animationDelay: '2s' }} />
  </Box>
);

const CommunityVisual = () => (
  <Box sx={{ position: 'relative', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Box sx={{
      position: 'absolute',
      width: '80px',
      height: '80px',
      borderRadius: '100%',
      border: '3px solid',
      borderColor: 'primary.main',
      animation: `${shockwave} 2s ease-out infinite`,
    }} />
    <SupportAgentRoundedIcon color="primary" sx={{ fontSize: '4rem', zIndex: 1 }} />
  </Box>
);

// --- MOBILE LAYOUT ---
interface FeaturesMobileViewProps {
  items: Array<{ title: string; description: string; visual: React.ReactNode }>;
}

function FeaturesMobileView({ items }: FeaturesMobileViewProps) {
  return (
    <Stack spacing={4} sx={{ display: { xs: 'flex', sm: 'none' } }}>
      {items.map((item, index) => (
        <Card key={index} variant="outlined">
          <Box sx={{ minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ height: 200, width: '100%' }}>{item.visual}</Box>
          </Box>
          <Box sx={{ px: 2, pb: 2 }}>
            <Typography gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
              {item.description}
            </Typography>
          </Box>
        </Card>
      ))}
    </Stack>
  );
}

// --- MAIN FEATURES COMPONENT ---
export default function Features() {
  const { t } = useTranslation();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const items = [
    {
      icon: <DevicesRoundedIcon />,
      title: t("feature-page.items.0.title"),
      description: t("feature-page.items.0.description"),
      visual: <DevicesVisual />,
    },
    {
      icon: <PriceCheckRoundedIcon />,
      title: t("feature-page.items.1.title"),
      description: t("feature-page.items.1.description"),
      visual: <CostVisual />,
    },
    {
      icon: <SupportAgentRoundedIcon />,
      title: t("feature-page.items.2.title"),
      description: t("feature-page.items.2.description"),
      visual: <CommunityVisual />,
    },
  ];

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  return (
    <Container id="features" style={{paddingBottom: "2%"}}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          {t("feature-page.title")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          {t("feature-page.subheader")}
        </Typography>
      </Box>

      {/* --- DESKTOP VIEW --- */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: { sm: 'column', md: 'row' }, gap: 4 }}>
        <Card
          variant="outlined"
          sx={{
            width: { sm: '100%', md: '70%' },
            height: { sm: 420, md: 'auto' },
            p: 2,
          }}
        >
          <Fade in key={selectedItemIndex} timeout={500}>
            <Box sx={{ width: '100%', height: '100%' }}>
              {items[selectedItemIndex].visual}
            </Box>
          </Fade>
        </Card>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0, width: { sm: '100%', md: '40%'} }}>
          {items.map(({ icon, title, description }, index) => (
            <Box
              key={index}
              component={Button}
              onClick={() => handleItemClick(index)}
              sx={[
                (theme) => ({
                  p: 2.5,
                  height: '100%',
                  width: '100%',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  borderRadius: '12px',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                  ...theme.applyStyles('dark', {
                    borderColor: 'grey.800',
                  }),
                }),
                selectedItemIndex === index && {
                  backgroundColor: 'action.selected',
                  borderColor: 'primary.main',
                },
              ]}
            >
              <Box
                sx={[
                  {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    gap: 1,
                    textAlign: 'left',
                    textTransform: 'none',
                    color: 'text.secondary',
                  },
                  selectedItemIndex === index && {
                    color: 'text.primary',
                  },
                ]}
              >
                {React.cloneElement(icon, { sx: { mb: 1 } })}
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* --- NEW MOBILE VIEW --- */}
      <FeaturesMobileView items={items} />

    </Container>
  );
}