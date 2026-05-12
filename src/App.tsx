/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import FeaturedSections from './components/FeaturedSections';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <CursorTrail />
      <Navbar />
      <main>
        <Hero />
        <NewArrivals />
        <FeaturedSections />
      </main>
      <Footer />
    </div>
  );
}
