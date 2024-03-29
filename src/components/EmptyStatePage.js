import React from "react";
import GetStartedImg from '../images/illustration-empty.svg';
import MobileMockup from '../images/illustration-phone-mockup.svg';
import LinkBox from "./LinkBox";

function EmptyState() {
    return (
        <div className="flex items-center slit-in-vr">
            <aside>
                <figure className="bg-white mt-4 mr-4 mb-4 rounded-lg hidden lg:block">
                    <img src={MobileMockup} className="mockup px-10 lg:py-8" alt="mobile mockup" />
                </figure>
            </aside>
            
            <main className="bg-white rounded-lg p-8 flex-1">
                <article className="mb-10">
                    <h2 className="font-bold text-4xl mb-3">Customize your links</h2>
                    <p className="text-gray-500">Add/edit/remove links below and then share all your profiles with the world.</p>
                </article>
                <button className="text-center rounded-lg border text-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white p-2 w-full"><i className="bi bi-plus-square-dotted"></i> Add New Link</button>
                <section className="p-8 mb-10 rounded-lg bg-cyan-50 bg-opacity-50 mt-8">
                    <figure className="flex justify-center">
                        <img src={GetStartedImg} alt="empty state pic" />
                    </figure>
                    <article className="text-center">
                        <h2 className="font-bold text-4xl mb-6">Let's get you started</h2>
                        <p className="text-gray-500">Use the "Add New Link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</p>
                    </article>
                </section>
                <section>
                    <LinkBox />
                </section>
                <footer className="bg-white border-t border-t-gray-500 w-full pt-6">
                    <button disabled className="save float-right py-2 px-4 rounded-lg text-white bg-cyan-300 cursor-not-allowed">Save</button>
                </footer>
            </main>
        </div> 
    )
}

export default EmptyState;
