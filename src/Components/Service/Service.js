import ServiceItem from './ServiceItem';

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'Haircut',
      descShort:
        'Redefine And Refresh Your Look With The Haircut Service At Enrich! It Adds A Frame To Your Face Structure, Enhances Your Look ...',
      desc: 'Redefine And Refresh Your Look With The Haircut Service At Enrich! It Adds A Frame To Your Face Structure, Enhances Your Look And Also Helps To Prevent Split Ends And Improve Natural Hair Structure. So, Go Short Or Just Add Some Definition To Your Tresses, The Choice Is Yours! Get Expert Consultation And Haircut That Is Tailored To You.',
      image:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQeQo4vGmVc62FJmP3sF6XKRsbu0qChkPJwEY2S7vWdtkp2P5FU',
      stars: 5,
      minutes: 50,
      reviews: 100,
      rupees: 975,
    },
    {
      id: 2,
      title: 'Hairwash',
      descShort:
        'Long Hair Wash Service At Enrich Includes Cleansing And Conditioning For Long Tresses, With Professional Hair Care Products...',
      desc: 'Long Hair Wash Service At Enrich Includes Cleansing And Conditioning For Long Tresses, With Professional Hair Care Products Selected After Examining The Scalp And Hair Condition. It Helps To Clean The Dirt, Pollution And Excess Sebum From The Scalp Giving You Fresh, Clean, And Soft Hair.',
      image:
        'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F858ad1f6-6a90-11e9-bf02-7f5aa383779f.jpg?crop=5589%2C3144%2C0%2C291&resize=1200',
      stars: 5,
      minutes: 30,
      reviews: 101,
      rupees: 400,
    },
    {
      id: 3,
      title: 'Haircolor',
      descShort:
        'Want To Change Your Style By Coloring Your Entire Hair? Check With Our Consultant On The Shade That Will Suit You The Most.',
      desc: 'Want To Change Your Style By Coloring Your Entire Hair? Check With Our Consultant On The Shade That Will Suit You The Most.',
      image:
        'https://sheerluxe.com/sites/sheerluxe/files/styles/hero_md/public/articles/2022/02/hair-trends-22-hero.png.webp?itok=K8RqzNTS',
      stars: 5,
      minutes: 50,
      reviews: 100,
      rupees: 1200,
    },
    {
      id: 4,
      title: 'Hair Styling',
      descShort:
        'Temporarily Change Your Look By Blow-Drying It To Straight, Wavy, Or Curly.',
      desc: 'Temporarily Change Your Look By Blow-Drying It To Straight, Wavy, Or Curly.',
      image:
        'https://aerblowdrybar.com/8-reasons-why-we-believe-we-have-the-best-blow-dry-bar-in-kensington/',
      stars: 5,
      minutes: 50,
      reviews: 100,
      rupees: 850,
    },
    {
      id: 5,
      title: 'Hair Spa',
      descShort:
        'It Is A Well-Being Treatment. It Nourishes And De-Stresses The Scalp. The Relaxing Treatment Created To Deeply Nourish.....',
      desc: 'It Is A Well-Being Treatment. It Nourishes And De-Stresses The Scalp. The Relaxing Treatment Created To Deeply Nourish And Condition The Hair, The Spa Massage Helps To Relax And Rejuvenate Both Hair And Scalp, Adds Shine To The Hair, And Has A Calming Effect On The Sense.',
      image:
        'https://assets.alternahaircare.com/_501x334_crop_center-center_100_line/iStock-964185794.jpg',
      stars: 5,
      minutes: 80,
      reviews: 100,
      rupees: 980,
    },
  ];

  return (
    <div
      className="main"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {services.map(service => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
};
export default Service;
