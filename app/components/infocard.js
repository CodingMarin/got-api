import Image from 'next/image'

export default function InfoCard({ picture, status, name, description }) {
    return (
        <div class="info-card" style={{ width: 240, height: 230 }}>
            <div class="shine"></div>
            <div class="background">
                <div class="tiles">
                    <div class="tile tile-1"></div>
                    <div class="tile tile-2"></div>
                    <div class="tile tile-3"></div>
                    <div class="tile tile-4"></div>

                    <div class="tile tile-5"></div>
                    <div class="tile tile-6"></div>
                    <div class="tile tile-7"></div>
                    <div class="tile tile-8"></div>

                    <div class="tile tile-9"></div>
                    <div class="tile tile-10"></div>
                </div>

                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
                <Image
                    className='picture'
                    src={picture}
                    alt='Daenerys Targaryen'
                    width={245}
                    height={192}
                    quality={100}
                />
            </div>
            <div className='hero position-absolute text-center' style={{ width: 240 }}>
                <h4>{name}</h4>
                {/* <div className='row'>
                    <span className='text-secondary d-inline'>Status:&nbsp;
                        <p className='d-inline'>
                            <span className='status-icon d-inline'>●</span>
                            &nbsp;Alive
                        </p>
                    </span>
                    <span className='text-secondary d-inline'>
                        Gender:&nbsp;
                        <p className='d-inline'>Female</p>
                    </span>
                </div> */}
            </div>
        </div>
    )
}