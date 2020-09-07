// This context acts as a storage container that allows any component within this app to acces the items stored within this context!!

import React from 'react';

const BookmarksContext = React.createContext({
    bookmarks: [],
    addBookmark: () => {},
    deleteBookmark: () => {},
});


export default BookmarksContext;