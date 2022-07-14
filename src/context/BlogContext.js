import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blog_post':
            return [...state, { 
                id: Math.floor(Math.random()*999999999999), 
                title: action.payload.title,
                content: action.payload.content,
            }];
        case 'delete_blog_post':
            return state.filter((blogPost)=>blogPost.id != action.payload);
        case 'edit_blog_post':
            return state.map((blogPost)=>{
                return blogPost.id===action.payload.id 
                ? action.payload 
                : blogPost;
            });
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return ((title, content, callback) => {
        dispatch({type: 'add_blog_post', payload: {
            title,
            content,
        }});
        if(callback){
            callback();
        }
    });
}

const deleteBlogPost = (dispatch) =>{
    return (id) =>{
        dispatch({
            type: 'delete_blog_post', 
            payload: id,
        });
    };
};

const editBlogPost = (dispatch) => {
    return (id, title, content,callback) => {
        dispatch({
            type: 'edit_blog_post',
            payload: {
                id,
                title,
                content
            }
        });
        if(callback){
            callback();
        }
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost,deleteBlogPost,editBlogPost}, 
    [{
        id: '81928318793',
        title: 'Blog Post #1',
        content: 'jalkwenfkl;an aenf ;lkfn wenf ;alwkneaflk'
    },
    {
        id: '81928318794',
        title: 'Blog Post #2',
        content: 'kweif jiapjpoe haus nenaj akne fjakean fjkase'
    }]
);