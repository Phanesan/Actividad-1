import { Container } from "@mui/material";
import Item from "./Item";
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Content({dataSearch}) {

    const [isLoading, setLoading] = useState(true);
    const [rangeItems, setRangeItems] = useState([1,51]);
    const [items, setItems] = useState();
    const [itemsSearch, setItemsSearch] = useState();
    const [nameSearch, setNameSearch] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(21);
    const [elements, setElements] = useState(1025);
    const [isSearching, setSearching] = useState(false);

    function getRangePag(paginaActual, elementosPorPagina, totalElementos) {
        // Calcular el índice de inicio
        const startIndex = Math.min((paginaActual - 1) * elementosPorPagina + 1, totalElementos);

        // Calcular el índice de fin
        const endIndex = Math.min(startIndex + elementosPorPagina - 1, totalElementos);
        console.log("start:",startIndex," / end:",endIndex);
        return {
          startIndex: startIndex,
          endIndex: endIndex,
        };
    }

    function getPageQuantity(totalElementos, elementosPorPagina) {
        const cantidadPaginas = Math.ceil(totalElementos / elementosPorPagina);
        return cantidadPaginas;
    }

    const handleChange = (event, value) => {
        console.log(value);
        setLoading(true);
        setPage(value);
        const {startIndex,endIndex} = getRangePag(value,51,elements);
        setRangeItems([startIndex,endIndex]);
        scrollToTop();
    }

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }

    useEffect(() => {
        setElements(1025);
    },[]);

    useEffect(() => {
        if(isSearching == false) {
            const fetchData = async () => {
                const requestList = [];
                for (let i = rangeItems[0]; i <= rangeItems[1]; i++) {
                    requestList.push({url:`https://pokeapi.co/api/v2/pokemon/${i}`});
                }
                
                let res,data;
                try {
                    res = await Promise.all(requestList.map(request => fetch(request.url)));
                    data = await Promise.all(res.map(response => response.json()));
                } catch (e) {
                    console.log(e);
                }
    
                setItems(data);
                setLoading(false);
            }
            fetchData();
        } else {
            const {startIndex,endIndex} = getRangePag(page,51,elements);
            setRangeItems([startIndex,endIndex]);

            let items = [];
            for(let i = startIndex-1; i <= endIndex-1; i++) {
                console.log(i);
                if(itemsSearch[i] != undefined) {
                    items.push(itemsSearch[i]);
                    console.log(itemsSearch[i]);
                }
            }

            setItems(items);
            setLoading(false);
        }
    },[page]);

    useEffect(() => {
        console.log("search:",dataSearch);
        if(dataSearch != undefined) {
            setLoading(true);
            const fetchData = async () => {
                let resultsJson;
                let resultsArray = [];
    
                await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0`)
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    resultsJson = json.results;
                })
                for(let i = 0; i < 1025; i++) {
                    if(resultsJson[i] != undefined) {
                        resultsArray.push(resultsJson[i].name);
                    }
                }
    
                const filtered = resultsArray.filter(result => result.includes(dataSearch));
                console.log(filtered);
                setElements(filtered.length);
                setMaxPage(getPageQuantity(filtered.length,51));
                setNameSearch(filtered);
            }
            fetchData();
        }
    },[dataSearch])

    // Search fetch
    useEffect(() => {
        if (nameSearch.length === 0) {
            return;
        }

        scrollToTop();
        setPage(1);

        const fetchData = async () => {
            const requestList = [];
            for (let i = 0; i <= nameSearch.length-1; i++) {
                requestList.push({url:`https://pokeapi.co/api/v2/pokemon/${nameSearch[i]}`});
            }
            
            let res,data;
            try {
                res = await Promise.all(requestList.map(request => {
                    return fetch(request.url)
                }));

                data = await Promise.all(res.map(response => {
                    return response.json();
                }));
            } catch (e) {
                console.log(e);
            }

            let items = [];

            const {startIndex,endIndex} = getRangePag(1,51,elements);
            setRangeItems([startIndex,endIndex]);

            for(let i = startIndex-1; i <= endIndex-1; i++) {
                items.push(data[i]);
            }

            setItemsSearch(data);
            setSearching(true);
            setItems(items);
        }
        fetchData();
        setLoading(false);
    },[nameSearch]);

    // Cargando...
    if(isLoading) {

        if(nameSearch.length === 0) {
            
            return (
            <>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{color:'white',paddingTop:'140px'}}>
                    No se encontraron coincidencias.
                </Typography>
            </>
            );
        }

        return (
            <>
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
                <Stack spacing={2} sx={{ paddingBottom: '30px' }}>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }} color={'white'}>Page: {page}</Typography>
                    <Pagination count={21} page={page} onChange={handleChange} />
                </Stack>
            </>
        );
    }

    // Listo
    return (
        <>
        <Container className="content" sx={{ marginTop: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
            {items.map((item) => (
                <Item
                    initImg={item.sprites.other.home.front_default}
                    initName={item.name}
                />
            ))}
        </Container>
        <Stack spacing={2} sx={{ paddingBottom: '30px' }}>
            <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }} color={'white'}>Page: {page}</Typography>
            <Pagination count={maxPage} page={page} onChange={handleChange} />
        </Stack>
        </>
    );
}