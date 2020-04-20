import React, {Component} from 'react';
import { Button,Row,Col } from 'react-bootstrap';
import Header from '../../components/header/header.component';
import SideSection from '../../components/side-section/side-section.component';
import FlippedSide from '../../components/flipped-side/flipped-side.component';
import AnimatedSection from '../../components/animated-section/animated-section.component';
import FAQ from '../../components/FAQ/faq.component';

const HomePage = () => (
    <div className="app">
        <Header />
        <SideSection />
        <FlippedSide />
        <AnimatedSection />
        <FAQ />
    </div>
);

export default HomePage;