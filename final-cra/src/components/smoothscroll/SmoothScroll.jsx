import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

const SmoothScroller = ({ children, style = { height: '100vh' } }) => {
  const [scrollBarCreated, setScrollBarCreated] = useState(false);
  const scroller = useRef();
  const bodyScrollBar = useRef();

  useEffect(() => {
    scroller.current = document.querySelector('.scroller');
    bodyScrollBar.current = Scrollbar.init(scroller.current, {
      damping: 0.1,
      continuousScrolling: true,
      alwaysShowTracks: false,
      renderByPixels: !('ontouchstart' in document),
      delegateTo: scroller.current,
    });
    setScrollBarCreated(true);
  }, []);

  useEffect(() => {
    if (scrollBarCreated) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.scrollerProxy(scroller.current, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.current.scrollTop = value;
          }
          return bodyScrollBar.current.scrollTop;
        },
      });
      bodyScrollBar.current.addListener(ScrollTrigger.update);
      ScrollTrigger.defaults({ scroller: scroller.current });
    }
  }, [scrollBarCreated]);

  return (
    <div className="scroller" style={style}>
      {children}
    </div>
  );
};

export default SmoothScroller;
