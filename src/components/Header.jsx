import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import CartPage from './_pages/CartPage';
import Container from './Container';
import Flex from './Flex';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="h-[56px] py-2 border-b border-[#bbb]">
      <Container>
        <Flex justifyContent={"space-between"}>
          <Link to={"#"} className="text-[20px]">Start Bootstrap</Link>
          <Flex className='grow'>
            <Flex justifyContent="flex-start" className='grow px-4 [&>a]:p-2 [&>a]:text-[16px] [&>a]:text-[#0000008c]'>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>About</Link>
              <Link to={"/"}>Shop</Link>
            </Flex>
            <button 
              className="flex items-center py-[6px] px-[12px] border border-[#212529] rounded-lg cursor-pointer hover:bg-[black] duration-[200ms] hover:text-white"
              onClick={toggleCart}
            >
              <FaCartShopping className="mr-1"/>
              <span>Cart</span>
              <span className="badge bg-black text-white rounded-full ms-1 px-2 text-[16px]">0</span>
            </button>
          </Flex>
        </Flex>
      </Container>
      <CartPage isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}