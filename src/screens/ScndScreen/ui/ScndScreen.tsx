import { ScndScreenCard } from 'entities/ScndScreenCard';
import style from './ScndScreen.module.scss'
import SelfImage from 'shared/assets/img/photo_2023-04-24_15-09-21 (2).jpg'
import ScndScreenTitle from 'shared/assets/img/PRO BUSINESS.svg';
import BusinessIcon from 'shared/assets/img/ProBusinessIcon.svg'
import Plus from 'shared/assets/img/Plus.svg'
import MaxPhoto from 'shared/assets/img/photo_2023-04-24_15-36-54.jpg'
import Image from 'next/image';
import { $host } from 'shared/config/http/host';
import { StrapiDiplom } from 'shared/types/strapi.interfaces';


export const ScndScreen = async () => {
  const diploms = await $host.get<StrapiDiplom>('/api/diplomies?populate=*').then(r => r.data.data)

  return (
    <div className={style.scndScreen} id='aboutMe'>
      <div className={style.scndScreen__title} >
        <ScndScreenTitle/>
      </div>
      <div className={style.scndScreen__main}>
        <div className={style.main__photo}>
          <Image src={SelfImage} alt='' quality={100}/>
          <div className={style.photo__business}>
            <BusinessIcon/>
          </div>
        </div>
        <div className={style.mobileName}>
          <div className={style.firstPerson__description}>
            <div className={style.description__name}>Валентина Голубева</div>
            <div className={style.description__title}>Бизнес Коуч</div>
          </div>
        </div>
        <div className={style.main__info}>
          <div className={style.info__title}>&quot;Не ищите совершенства, стремитесь <p>к постоянному улучшению себя и своего бизнеса&quot;</p>
          </div>
          <div className={style.info__achievements}>
            {diploms.map(diplom => <ScndScreenCard  id={diplom.id} key={diplom.id} image={diplom.attributes.image} year={diplom.attributes.year} title={diplom.attributes.title}/>)}
          </div>
        </div>
      </div>
      <div className={style.mobileAnd}>
        А также
      </div>
      <div className={style.scndScreen__bottom}>
        <div className={style.bottom__firstPerson}>
          <div className={style.firstPerson__description}>
            <div className={style.description__name}>Валентина Голубева</div>
            <div className={style.description__title}>Бизнес Коуч</div>
          </div>
        </div>
        <div className={style.bottom__plus}>
          <Plus/>
        </div>
        
        <div className={style.bottom__secondPerson}>
          <div className={style.secondPerson__photo}>
            <Image src={MaxPhoto} alt=''/>
          </div>
          <div className={style.secondPerson__definition}>
            <div className={style.definition__name}>Максим Грушников</div>
            <div className={style.definition__title}>Учредитель ProBusiness</div>
          </div>
        </div>
      </div>
    </div>
    
  );
}