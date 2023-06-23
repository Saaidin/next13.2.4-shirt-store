const Footer = () => {
  return (
    <footer className="h-full w-full flex justify-center mt-[10rem] pb-12">
      <div className="h-full w-10/12 grid grid-row sm:grid-cols-3 justify-between">
        {/* column */}
        <div className="flex flex-col gap-4 -mt-20 sm:mt-0">
          <h2 className="text-2xl mb-8 text-orange-600">FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        {/* column */}
        <div className="flex flex-col gap-4 mt-10 sm:mt-0">
          <h2 className="text-2xl mb-8 text-orange-600">Contacts</h2>
          <span>YouTube: DinWebDev</span>
          <span>YouTube: DinWebDev</span>
          <span>YouTube: DinWebDev</span>
        </div>
        {/* column */}
        <div className="flex flex-col gap-4 mt-10 sm:mt-0">
          <h2 className="text-2xl mb-8 text-orange-600">Privacy Policy</h2>
          <p>
            Consequuntur quia tristique illo aliquam sollicitudin, faucibus et
            quasi nesciunt tenetur soluta! Class aspernatur optio, mus,
            voluptatum ac vulputate. Purus, unde aenean nisi qui, aptent iste
            quam dignissim fugiat quis odio voluptatibus, netus, commodi
            aliquip, excepteur, natus penatibus tincidunt sed? Phasellus, ipsa
            aenean dicta?
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
/*
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-full w-full flex justify-center mt-[10rem] pb-12'>
      <div className='h-full w-10/12 grid grid-cols-3 justify-between'>
         //column 
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-orange-600'>FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
         //column 
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-orange-600'>Contacts</h2>
          <span>YouTube: WebDevMania</span>
          <span>YouTube: WebDevMania</span>
          <span>YouTube: WebDevMania</span>
        </div>
         //column 
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-orange-600'>Privacy Policy</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, dicta! Voluptate nihil quidem omnis voluptatibus minima similique error eius nostrum tempore,
            esse cumque alias unde autem molestiae officiis? Cumque, amet!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
*/
