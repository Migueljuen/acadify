import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from './AnimatedSection';
function StatsBox() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className="w-full bg-[#2ca58d]/5 dark:bg-[#2ca58d]/30  h-[600px] text-display dark:text-[#ededed]">
            <div className="max-w-[1440px] w-[90%] mx-auto h-full flex flex-col justify-center">
                <AnimatedSection>
                    <p className="text-sm px-3 py-1 rounded-xs">IMPACT</p>
                    <p className="text-4xl font-display">Acadify at a Glance</p>
                    <div className="flex flex-row gap-4 mt-10 text-black/70 dark:text-[#ededed]">
                        <div className="box w-full h-52 bg-[#2ca58d]/30  dark:bg-[#2ca58d] rounded-md flex flex-col justify-evenly px-8">
                            <p className="text-6xl font-semibold">
                                +{inView && <CountUp end={1200} duration={4} separator="," />}
                            </p>
                            <p>Study materials readily available</p>
                        </div>
                        <div className="box w-full h-52 bg-[#2ca58d]/30 dark:bg-[#2ca58d] rounded-md flex flex-col justify-evenly px-8">
                            <p className="text-6xl font-semibold">
                                +{inView && <CountUp end={200} duration={4} />}
                            </p>
                            <p>High quality audio summaries</p>
                        </div>
                        <div className="box w-full h-52 bg-[#2ca58d]/30 dark:bg-[#2ca58d] rounded-md flex flex-col justify-evenly px-8">
                            <p className="text-6xl font-semibold">
                                {inView && <CountUp end={4.9} duration={4} decimals={1} />} /5
                            </p>
                            <p>Average Rating from students across the globe</p>
                        </div>
                        <div className="box w-full h-52 bg-[#2ca58d]/30 dark:bg-[#2ca58d] rounded-md flex flex-col justify-evenly px-8">
                            <p className="text-6xl font-semibold">
                                +{inView && <CountUp end={90} duration={4} />}%
                            </p>
                            <p>Student satisfaction rate this year</p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}

export default StatsBox;
