import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black">
        <div>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                 REACT    
            </h1>
            <p className="py-4">Lo rem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis ipsa dolorum laudantium doloremque. Sed pariatur quia blanditiis exercitationem nesciunt!</p>
            <div className="flex justify-between md:w-[75%] my-6">
                <FaFacebookSquare size={30} className=' hover:bg-blue-500' />
                <FaInstagram size={30} />       
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        <div className="lg:col-span-3 xl:col-span-3  justify-between mt-6 hidden">
            <div>
                <h2 className="font-medium text-black">Solutions</h2>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>
            <div>
                <h2 className="font-medium text-black">Support</h2>
                <ul>
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentation</li>
                    <li className="py-2 text-sm">Guides</li>
                    <li className="py-2 text-sm">API Status</li>
                </ul>
            </div>
            <div>
                <h2 className="font-medium text-black">Company</h2>
                <ul>
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Blog</li>
                    <li className="py-2 text-sm">Jobs</li>
                    <li className="py-2 text-sm">Press</li>
                    <li className="py-2 text-sm">Careers</li>
                </ul>
            </div>
            <div>
                <h2 className="font-medium text-black">Legal</h2>
                <ul>
                    <li className="py-2 text-sm">Claim</li>
                    <li className="py-2 text-sm">Policy</li>
                    <li className="py-2 text-sm">Terms</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Footer;