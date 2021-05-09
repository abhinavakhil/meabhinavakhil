import React from 'react';
import { Box, Container, Grid, Button, Input, Heading, Text } from 'theme-ui';

import Image from 'components/image';

import img1 from 'assets/partner-1-1.png';
import img2 from 'assets/partner-1-2.png';
import img3 from 'assets/partner-1-3.png';

import bannerImg from 'assets/banner-image-1-1.png';
import BannerBG from 'assets/banner-bg-1-1.png';
import BannerPattern from 'assets/banner-pattern.png';

const Banner = () => {
  return (
    <Box sx={styles.banner} id="banner">
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h3">
            HEY, I AM ABHINAV
            </Heading>
            <Text as="p">
              FullStack Software Developer with 1.6 year's of
              experience and Zeal to Build beautiful Products.
            </Text>
            <Box as="form" sx={styles.form}>
              {/* <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
                subscribe
              </Box>
              <Input
                name="subscribe"
                id="subscribe"
                placeholder="Subscribe newsletter"
                sx={styles.form.input}
              /> */}
              <Button type="submit" sx={styles.form.button}>
               <a href="mailto:abhinavakhi@hotmail.com">Hire Me</a> 
              </Button>
              <Button type="submit" sx={styles.form.button}>
                <a href="https://abhinavakhil.tech/img/Abhinav's%20Resume%20(2).pdf?" target="_blank" >Get Cv</a>
              </Button>
            </Box>
            <Box sx={styles.partner}>
              <Text as="span">Experienced At:</Text>
              <Box as="div">
                {/* <Image src={img1} alt="" /> */}
                <p style={{color: '#C0C0C0',marginTop: '29px'}}>Kinnect.us</p>
              </Box>
              <Box as="div">
                {/* <Image src={img2} alt="" /> */}
                <p style={{color: '#C0C0C0',marginTop: '29px'}}>Givebrite.com</p>
              </Box>
              <Box as="div">
                {/* <Image src={img3} alt="" /> */}
                <p style={{color: '#C0C0C0',marginTop: '29px'}}>Zersey Infotech</p>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.image}>
            <Image src={bannerImg} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    pt: ['110px', null, null, null, '150px', '200px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    backgroundColor: '#F6F8FB',
    overflow: 'hidden',

    overflowX: 'hidden',
    paddingTop: ['100px', '120px'],
    paddingBottom: ['0px', null, '80px'],
    backgroundImage: [
      'linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)',
      `url(${BannerBG})`,
    ],
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
  },
  container: {
    width: [null, null, null, null, null, null, '1390px'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gridGap: '0',
  },
  content: {
    h3: {
      color: 'black',
      fontWeight: 'bold',
      lineHeight: [1.39],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '20px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
      fontSize: [6, null, null, '36px', null, '55px', 9],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ['26px', null, null, null, 2.33],
      color: 'text_secondary',
      mb: ['20px', null, null, null, null, '30px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, null, null, '410px'],
      br: {
        display: ['none', null, null, null, 'inherit'],
      },
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 15px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px'],
    },
  },
  image: {
    img: {
      display: 'flex',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['0', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, null, null, null, 'none'],
    },
    '&:after': {
      content: '""',
      width: '202px',
      height: '347px',
      backgroundImage: `url(${BannerPattern})`,
      
      backgroundPosition: 'center',
      top: '150px',
      right: '143px',
      position: 'absolute',
      zIndex: 1,
      '@media(max-width: 991px)': {
        right: '-10px',
      },
    },
  },
  partner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['40px'],
    '> div + div': {
      ml: ['10px', null, null, '20px', null, '30px'],
    },
    img: {
      display: 'flex',
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#566272',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto'],
    },
  },
};
