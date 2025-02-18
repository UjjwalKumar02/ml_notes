import React from 'react'
import Def from '../content/Def'
import Explain from './Features'
import Image from '../content/Image'
import Code from './Methods'
import Params from '../content/Params'
import Usage from '../content/Usage'
import Adv from '../content/Adv'
import Disadv from '../content/Disadv'
import NotToUse from './NotToUse'

const Content = ({title, def, features, img, code, params, uses, adv, disadv, notuse}) => {
  return (
    <section 
    className='mt-30 md:w-[65%] w-[90%] mx-auto bg-[#ffffff] text-[#00000099]'
    >
      <Def title={title} def={def} />
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