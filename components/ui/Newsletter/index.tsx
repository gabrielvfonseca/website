import React, { useState } from 'react';
import { BroadcastIcon } from '@iconicicons/react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleClick = () => {};

  return (
    <div id="newsletter">
      <form className="w-full px-4 py-3 my-6 box-border bg-transport border-0.8 border-solid border-charleston border-opacity-80 rounded-sm hover:border-opacity-90 transition ease-in-out delay-80 duration-275 drop-shadow-lg">
        <div className="flex space-x-1">
          <h5 className="sans font-bold text-ts">Subscribe to the newsletter</h5>
          <span className="text-whiter fill-whiter opacity-70 hover:text-primary hover:fill-primary transition ease-in-out delay-75 duration-250">
            <BroadcastIcon width={16} height={16} />
          </span>
        </div>
        <p className="text-gray text-ts font-sans font-medium mt-1 mb-2">
          Get emails from me about web development, tech, and early access to new articles.
        </p>
        <div className="relative">
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            onChange={(e) => setEmail(e.target.value)}
            className="block pl-3 w-full h-10 text-whiter bg-transparent rounded-th border-0.8 border-solid border-charleston focus:ring-primary focus:border-primary"
            placeholder="timcook@apple.com"
            required
          />
          <button
            type="submit"
            onClick={handleClick}
            className="text-black m-auto h-fit py-1 px-3 absolute right-1 top-1 font-medium rounded-base font-serif text-ts bg-whiter hover:bg-opacity-75 transition ease-in-out delay-75 duration-250"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
