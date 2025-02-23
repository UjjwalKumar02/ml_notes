import React from 'react'
import Def from './content-elements/Def'
import Explain from './content-elements/Features'
import Image from './content-elements/Image'
import Code from './content-elements/Methods'
import Params from './content-elements/Params'
import Usage from './content-elements/Usage'
import Adv from './content-elements/Adv'
import Disadv from './content-elements/Disadv'
import NotToUse from './content-elements/NotToUse'

const Content = ({title, def, handleImplementationClick, features, img, code, params, uses, adv, disadv, notuse}) => {
  return (
    <section 
    className='mt-26 md:w-[65%] w-[90%] mx-auto bg-[#ffffff] text-[#00000099]'
    >
      <Def title={title} def={def} handleImplementationClick={handleImplementationClick}/>
      <Explain features={features} />
      <Image img={img} />
      <Code code={code} />
      <Params params={params} />
      <Usage uses={uses} />
      <Adv adv={adv} />
      <Disadv disadv={disadv} />
      <NotToUse notuse={notuse}/>
    </section>

  )
}

export default Content