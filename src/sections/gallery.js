/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/gallery-card';

import gallery1 from 'assets/gallery/1.png';
import gallery2 from 'assets/gallery/2.png';
import gallery3 from 'assets/gallery/3.png';
import gallery4 from 'assets/gallery/4.png';
import gallery5 from 'assets/gallery/5.png';
import gallery6 from 'assets/gallery/6.png';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Front working space',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Meeting corner',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Guest meeting room',
  },
  {
    id: 4,
    image: gallery4,
    title: 'Guest rest room',
  },
  {
    id: 6,
    image: gallery6,
    title: 'Kitchen room',
  },
  {
    id: 5,
    image: gallery5,
    title: 'Single working space',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="portfolio" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Portfolio"
          title="Let’s check my recently created projects"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Button variant="muted" sx={styles.button} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
          Explore More <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
