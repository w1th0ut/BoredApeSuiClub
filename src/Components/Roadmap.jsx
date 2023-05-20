import React from 'react';
import './Roadmap.css'

const Roadmap = () => {
    return (
        <div id='roadmap' className='pb-16 md:pb-32'>
            <h2 className='text-white text-4xl md:text-5xl text-center font-bold pb-24 font-Poppins'>Roadmap</h2>
            <div className='flex justify-center'>
                <div className='h-auto w-4 bg-white rounded-lg'></div>
            </div>



            {/* roadmap-wrapper */}
            <div className='flex flex-col md:flex-row justify-center gap-5 mb-12 mx-6 md:mx-0'>   
                <div data-aos="fade-up" data-aos-duration="2000" className='text-white rounded-md shadow-xl p-5 border-l-4 border-white'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 1</h5>
                    <ul>
                        <li className='font-Roboto'>1. Building a strong and solid community.</li>
                        <li className='font-Roboto'>2. Engage in co-marketing opportunities with partner projects.</li>
                        <li className='font-Roboto'>3. Distribute rewards, whitelists and NFTs throught Twitter and Zealy contests.</li>
                        <li className='font-Roboto'>4. Increase visibility of the project by participating in public events.</li>
                        <li className='font-Roboto'>5. Secure partnership with a Launchpad on Sui.</li>
                        <li className='font-Roboto'>6. Launch our colletion Bored Ape Sui Club on Sui Testnet.</li>
                    </ul>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className='text-white rounded-md shadow-xl p-5 border-l-4 border-white'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 2</h5>
                    <ul>
                        <li className='font-Roboto'>7. Launch Discord and grow our community server to become <br/>a leading hub for the community and discussions.</li>
                        <li className='font-Roboto'>8. Launch our colletion Bored Ape Sui Club on Sui Mainnet.</li>
                        <li className='font-Roboto'>9. Holders Verification on Discord, NFT owners will be able <br/>to verify their NFTs to become voting members of the DAO.</li>
                        <li className='font-Roboto'>10. Proceeds from Bored Ape Sui Club NFT sales to fund DAO Development.</li>
                        <li className='font-Roboto'>11. Buying NFTs for intel.</li>
                        <li className='font-Roboto'>12. Alpha calls, Whitelist contests for the top tier projects, <br/>NFT Giveaways, Airdrops News, Crypto and NFT Analysis.</li>
                    </ul>
                </div>
            </div>
            
            <div className='flex flex-col md:flex-row justify-center gap-5 mb-12 mx-6 md:mx-0'>
                <div data-aos="fade-up" data-aos-duration="2500" className='text-white border-l-4 border-white rounded-md shadow-xl p-5'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 3</h5>
                    <ul className='font-Roboto'>
                        <li>13. Release sneak-peeks of Mutant Apes Sui Club.</li>
                        <li>14. Start Marketing of Mutant Ape Sui Club.</li>
                        <li>15. The holders of Bored Ape Sui Club are going to be automatically <br/>whitelisted for Mutant Ape Sui Club. Every Bored <br/>Ape will be a spot in the Mutant Ape List.</li>
                        <li>16. Launch our colletion Mutant Ape Sui Club on Sui Mainnet.</li>
                        <li>17. Proceeds from Mutant Ape Sui Club NFT sales to fund DAO Development. <br/>All the funds and royalties are going to the DAO wallet.</li>
                    </ul>
                </div>
                <div data-aos="fade-up" data-aos-duration="2500" className='text-white border-l-4 border-white rounded-md shadow-xl p-5'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 4</h5>
                    <ul className='font-Roboto'>
                        <li>18. Release sneak-peeks of Kennel Apes Sui Club.</li>
                        <li>19. Start Marketing of Kennel Ape Sui Club.</li>
                        <li>15. The holders of Bored Ape Sui Club and Mutant Ape Sui Club <br/>are going to be automatically whitelisted for Kennel Ape Sui Club. <br/>You will need to hold a Bored Ape and a Mutant Ape to be in the Kennel<br/>Ape List.</li>
                        <li>16. Launch our colletion Kennel Ape Sui Club on Sui Mainnet.</li>
                        <li>17. Proceeds from Kennel Ape Sui Club sales to funds DAO Development. <br/>All the funds and royalties are going to the DAO wallet.</li>
                    </ul>
                </div>
            </div>

            <div  className='flex flex-col md:flex-row justify-center mb-5 mx-6 md:mx-0'>
                <div data-aos="fade-up" data-aos-duration="3000" className='text-white border-l-4 border-white rounded-md shadow-xl p-5'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 5</h5>
                    <ul className='font-Roboto'>
                        <li>19. The funds generated by this collections are<br/>going to aquire a BAYC and continue our future plans.</li>
                        <li>20. Those are going to be our first steps, after that <br/>our holders are going to decice the future of the projects by voting in our DAO.</li>
                    </ul>
                </div>
            </div>



            
        </div>
    );
};

export default Roadmap;
