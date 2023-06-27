import Image from 'next/image'
import InfoCard from '@/components/infocard'

export default function Home() {
  return (
    <main>
      <div className='col-lg-12 padding-0'>
        <div className='align-self-center'>
          <div class="row gap justify-content-center">
            <InfoCard
              picture={'/character_00.png'}
              status={'alive'}
              name={'Daenerys Targaryen'}
              id={1}
            />
            <InfoCard
              picture={'/character_01.png'}
              status={'alive'}
              name={'Cersei Lannister'}
              id={2}
            />
            <InfoCard
              picture={'/character_01.png'}
              status={'alive'}
              name={'Cersei Lannister'}
              id={2}
            />
            <InfoCard
              picture={'/character_02.png'}
              status={'alive'}
              name={'Tyrion'}
              id={3}
            />
            <InfoCard
              picture={'/character_03.png'}
              status={'alive'}
              name={'Jon'}
              id={4}
            />
            <InfoCard
              picture={'/character_04.png'}
              status={'alive'}
              name={'Night King'}
            />
            <InfoCard
              picture={'/character_05.png'}
              status={'alive'}
              name={'Arya'}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
