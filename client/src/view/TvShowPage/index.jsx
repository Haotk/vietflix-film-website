import { useQuery } from '@apollo/client';
import React from 'react';
import DetailFilm from '../../components/DetailFilm';
import ListFilm from '../../components/ListFilm';
import Query from '../../query';
import Loading from '../../components/Loading';
import Mylayout from '../../components/Mylayout';
export default function TvShowPage() {
  const dataCardFilm = useQuery(Query.qGetAllFilm);
  
  let [isOpen, setOpen] = React.useState(() => {
      let initState = false || JSON.parse(localStorage.getItem('isOpen'));
      return initState;
  });
  const [filmId,setFilmId] = React.useState(()=>{
    let initState = null || localStorage.getItem('filmId');
    return initState;
  });
  const openModal = (id) => {
      setFilmId(id);
      setOpen(true);
      localStorage.setItem('isOpen',true)
      document.body.style.overflow = 'hidden';
  }
  const closeModal = () => {
      setOpen(false);
      setFilmId(null)
      localStorage.setItem('isOpen',false)    
      document.body.style.overflow = 'unset';
  }
  
  if (dataCardFilm.loading) return <Loading/>
  return ( 
    <Mylayout>
      <div className="py-32 px-20">
        <span className='xl:text-[300%] md:text-[300%] xs:text-[200%] font-bold border-l-red-600 border-l-8'>
          Danh sách phim bộ
        </span>
        <div> 
          <ListFilm title="Thịnh hành" openModal={openModal}/>
          <ListFilm title="Mới phát hành " openModal={openModal}/>
          <ListFilm title="Gợi ý cho bạn" openModal={openModal}/>
        </div>
      </div>
      {filmId!==null && <DetailFilm isOpen={isOpen} closeModal={closeModal} filmId={filmId}/>}
    </Mylayout>
  )
}
