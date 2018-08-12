const expect=require('chai').expect;
const api=require('../helpers/api');
const data=require('../data.json');

describe('test api methods',function(){
	it('should pass if a bookmark is addedd successfully',function(){
		api.addBookmark(data,2881789);
		expect(2881789).to.equal(data[0].bookmark);
	})

	it('should pass when all bookmarks are retrieved',function(){
		api.addBookmark(data,2881789);
		api.addBookmark(data,63476337);
		api.addBookmark(data,27247448);
		let bookmarks=api.getAllBookmarks(data);
		expect(3).to.equal(bookmarks.length);
	})

	it('should pass when a bookmark is removed',function(){
		api.addBookmark(data,2881789);
		api.addBookmark(data,63476337);
		api.addBookmark(data,27247448);
		api.removeBookmark(data,2881789);
		api.removeBookmark(data,63476337);
		api.removeBookmark(data,27247448);
		let bookmarks=api.getAllBookmarks(data);
		expect(0).to.equal(bookmarks.length);
	})

})
