import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./Products.css";

const Products = () => {
    return (
        <>
        <div className="products_row">
            <Product
             id="1" 
             title="SAMSUNG 34 ViewFinity S50GC Series Ultra-WQHD Monitor, 100Hz, 5ms, HDR10, AMD FreeSync, Eye Care, Borderless Design, PIP, PBP, LS34C502GANXZA, 2023, Black"
             image="https://m.media-amazon.com/images/I/71y4oBIWcdL._AC_SX569_.jpg"
             rating={4}
             price={379.99}
            />
            <Product 
            id="2" 
            title="Newest Quest 2 VR Headset 128GB Holiday Set - Advanced All-in-One Virtual Reality Headset Cover Set, White"
            image="https://m.media-amazon.com/images/I/61Uy4GVp-UL._AC_SX569_.jpg" 
            rating={4}
            price={199.99}  
            />
            <Product
            id="3"
            title="Redragon S101 Gaming Keyboard, M601 Mouse, RGB Backlit Gaming Keyboard, Programmable Backlit Gaming Mouse, Value Combo Set [New Version]"
            image="https://m.media-amazon.com/images/I/71QDJHG1PqL._AC_SL1500_.jpg"
            rating={4}
            price={39.99}
            />
            <Product
            id="4"
            title="Turtle Beach Recon 50 Xbox Gaming Headset for Xbox Series X/ S, Xbox One, PS5, PS4, PlayStation, Nintendo Switch, Mobile & PC with 3.5mm - Removable Mic, 40mm Speakers - Black"
            image="https://m.media-amazon.com/images/I/81APVcnj-EL._SX466_.jpg"
            rating={4}
            price={24.95}
            />
        </div>
        <div className="products_row">  
            <Product
            id="5"
            title="Dragon Ball Super - Dragon Stars - Goku (Super Hero), 6.5 Action Figure"
            image="https://m.media-amazon.com/images/I/717Lw1LmwlL._AC_SX569_.jpg"
            rating={4}
            price={19.87}
            />   
            <Product
            id="6"
            title="BestOffice High-Back Gaming Chair PC Office Chair Computer Racing Chair PU Desk Task Chair Ergonomic Executive Swivel Rolling Chair with Lumbar Support for Back Pain Women, Men,White"
            image="https://m.media-amazon.com/images/I/61t4mpabO+L._AC_SX679_.jpg"
            rating={4}
            price={89.99}
            />
            <Product
            id="7"
            title="Cabtnca Gaming Mugs, Gamer Gifts, Gamer Mug, Gaming Gifts, Gamer Gifts for Men, Playstation Mug, Gameboy Coffee Mug, Novelty Mug for Gamer, Gameboy Cup, Gaming Coffee Cup, 13Oz"
            image="https://m.media-amazon.com/images/I/517i-6sj3HL._AC_SX679_.jpg"
            rating={5}
            price={18.91}
            />
            <Product
            id="8"
            title="EasySMX X15 PC Controller - Enhanced Wireless Bluetooth Controller with Hall Joysticks/Hall Triggers/RGB Lighting - No Stick Drift, No Dead Zone - Work for Windows PC, Android, Steam and Switch"
            image="https://m.media-amazon.com/images/I/71KV6p-6Y0L._SX522_.jpg"
            rating={4}
            price={39.99}
            />
        </div>
        <div className="products_row">  
            <Product
            id="9"
            title="Acer Nitro V Gaming Laptop | Intel Core i7-13620H Processor | NVIDIA GeForce RTX 4050 Laptop GPU | 15.6 FHD IPS 144Hz Display | 16GB DDR5 | 512GB Gen 4 SSD | WiFi 6 | Backlit KB | ANV15-51-73B9"
            image="https://m.media-amazon.com/images/I/71F-Wcriq4L._AC_SX679_.jpg"
            rating={4}
            price={848.94}
            />
        </div>       
       </>
    )
}

export default Products