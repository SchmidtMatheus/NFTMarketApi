import React, { useState, useEffect, useCallback } from 'react';
import * as Styled from './styles';
import { TextInputSearch } from '../../components/TextInputSearch';
import { Button } from '../../components/Button';
import { loadPosts } from '../../utils/loadPosts';
import { Posts } from '../../components/Posts';
import useFlashMessage from '../../hooks/useFlashMessage';

export const Listar = () => {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(5);
    const [searchValue, setSearchValue] = useState('');
    const [Input, setInput] = useState('');
    const { setFlashMessage } = useFlashMessage();
    const handlePosts = useCallback(async (page, postsPerPage) => {
        const Posts = await loadPosts();
        setPosts(Posts.slice(page, postsPerPage));
        setAllPosts(Posts);
    }, []);
    useEffect(() => {
        handlePosts(0, postsPerPage);
    }, [handlePosts, postsPerPage]);
    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        setPosts(posts);
        setPage(nextPage);
    };
    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };
    const btnClick = () => {
        if (Input === "") {
            setFlashMessage('Fill in the field to search!', 'error');
            return;
        }
        setSearchValue(Input);
    };
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = searchValue ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;
    return (
        <Styled.Container>
            <TextInputSearch searchValue={Input} handleChange={handleChange} onClick={btnClick} />
            {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
            {filteredPosts.length === 0 && (
                <Styled.NotFound>
                    <p>Ops, parece que não há nft por aqui</p>
                </Styled.NotFound>
            )}
            <Styled.Button>
                {!searchValue && <Button text="Ver mais +" onClick={loadMorePosts} disabled={noMorePosts} />}
            </Styled.Button>
        </Styled.Container>
    );
};
