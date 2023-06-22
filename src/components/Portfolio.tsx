import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {portfolio.map((projects: { imgUrl: any; title: any; stack: any; link: any; }) => (
                        <PortfolioItem
                            imgUrl={projects.imgUrl}
                            title={projects.title}
                            stack={projects.stack}
                            link={projects.link}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Portfolio;