import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    Hello!, This is my first project from tutorial of NextJS called "Promptopia". and Thanks you all for testing my Project!
    </p>

    <Feed />
  </section>
);

export default Home;
