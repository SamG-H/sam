import React from 'react'
import './Terminal.css'

export default function Terminal() {
  return (
    <div className='Terminal'>
      <p>> sam.location</p>
      <p className='result'>&nbsp;=> 'Eugene, OR'</p>
      <p>> sam.interests</p>
      <p className='result'>&nbsp;=> ["forests", "linux", "the ocean", "beans", "drums", "birds"]</p>
      <p>> sam.resume</p>
      <p className='result'>&nbsp;=> '<a href='/sam_resume.pdf' target='_new'>sam_resume.pdf</a>'</p>
      <p>> sam.accounts</p>
      <p className='result'>&nbsp;=> &#123;
        :twitter=>"<a href='https://twitter.com/grasse_sam' target='_new'>@grasse_sam</a>",
        :linkedin=>"<a href='https://www.linkedin.com/in/samuel-grasse-haroldsen/' target='_new'>samuel-grasse-haroldsen</a>",
        :github=>"<a href='https://github.com/SamG-H' target='_new'>SamG-H</a>",
        :dev=>"<a href='https://dev.to/szam' target='_new'>szam</a>" &#125;</p>
      
    </div>
  )
}
