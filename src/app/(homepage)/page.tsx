"use client"
import Footer from '@/components/frames/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import Subscribe from '@/components/content/subscribe/Subscribe';
import About from '@/components/content/about/About';
import News from '@/components/content/news/News';
import Contact from '@/components/content/contact/Contact';
const theme = createTheme({
  palette: {
    primary: {
      main:blue[500],
      light: blue[100],
      dark:grey[900]
    },
  },
});

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      {/* <Subscribe />
      <About />
      <News /> */}
      <Contact />
      <Footer/>
    </div>
    </ThemeProvider>
  )
}
