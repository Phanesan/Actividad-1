import { Container } from "@mui/material";
import Item from "./Item";
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from "react";

export default function Content() {

    const [isLoading, setLoading] = useState(true);
    const [rangeItems, setRangeItems] = useState([1,52]);
    const [items, setItems] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const requestList = [];
            for (let i = rangeItems[0]; i <= rangeItems[1]; i++) {
                requestList.push({url:`https://pokeapi.co/api/v2/pokemon/${i}`});
            }

            const res = await Promise.all(requestList.map(request => fetch(request.url)));
            const data = await Promise.all(res.map(response => response.json()));

            setItems(data);
            setLoading(false);
        }
        fetchData();
    },[]);

    // Cargando...
    if(isLoading) {
        return (
            <Container className="content" sx={{marginTop:'50px' ,display:'flex',flexDirection:'row', justifyContent:'center', flexWrap:'wrap', gap:'30px'}}>
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
            </Container>
        );
    }

    // Listo
    return (
        <Container className="content" sx={{marginTop:'50px' ,display:'flex',flexDirection:'row', justifyContent:'center', flexWrap:'wrap', gap:'30px'}}>
            {items.map(item => (
                <Item
                initImg={item.sprites.other.home.front_default}
                initName={item.name}
                />
            ))}
        </Container>
    );
}