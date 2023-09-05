import Hero from '@/components/Hero'
import StatCard from '@/components/StatCard';
import Image from 'next/image';
import iconMesages from '@/public/icon-messages.svg';
import iconCommunities from '@/public/icon-communities.svg';
import screenMockups from '@/public/screen-mockups.svg'
import DesktopTopSection1 from '@/public/bg-section-top-desktop-1.svg';
import DesktopTopSection2 from '@/public/bg-section-top-desktop-2.svg';
import DesktopBottomSection1 from '@/public/bg-section-bottom-desktop-1.svg';
import DesktopBottomSection2 from '@/public/bg-section-bottom-desktop-2.svg';
import ImageTextSections from '@/components/ImageTextSection';

import GrowTogether from '@/public/illustration-grow-together.svg';
import FlowingConversations from '@/public/illustration-flowing-conversation.svg';
import YourUsers from '@/public/illustration-your-users.svg';
import CustomButton from '../components/CustomButton';
import Footer from '@/components/Footer';

const cards = [
  {imageName: iconCommunities, statistic: '1.4k+', text: 'Communities Formed'},
  {imageName: iconMesages, statistic: '2.7m+', text: 'Messages Sent'},
]

const imageTextSections = [
  {image: GrowTogether, bgFill:true, imagePlacement: 'right', textHeading: 'Grow Together', textBody: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.', imageBorderTop: DesktopTopSection1, imageBorderBottom: DesktopBottomSection1},
  {image: FlowingConversations, bgFill:false, imagePlacement: 'left', textHeading: 'Flowing Conversations', textBody: 'You wouldn\'t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.'},
  {image: YourUsers, bgFill:true, imagePlacement: 'right', textHeading: 'Your Users', textBody: 'It takes no time at all to integrate Huddle with your app\'s authentication solution. This means, once signed in to your app, your users can start chatting immediately.', imageBorderTop: DesktopTopSection2, imageBorderBottom: DesktopBottomSection2},
]

export default function Home() {
  return (
    <main className=''>
      <Hero className='contained' />
      <div className='relative w-full h-96 my-16'>
        <Image src={screenMockups} alt="illustration" className='contained' />
        <div className='grid sm:grid-cols-2 my-24 contained'>
          {
            cards.map((card) => (
              <StatCard key={card.statistic} {...card} />
            ))
          }
        </div>
        <div className='my-8 '>
          {
            imageTextSections.map((section, idx) => (
              <ImageTextSections key={idx} {...section} />
            ))
          }
        </div>
        <div className='flex flex-col justify-center items-center my-48'>
          <h1 className='font-poppins font-bold text-3xl text-center my-8'>Ready To Build Your Community?</h1>
          <CustomButton solid={true} text='Get Started For Free' className='px-8 sm:px-16 text-sm sm:text-base py-3 mt-12 shadow-md'/>
        </div>
        <Footer />
      </div>
    </main>
  )
}
