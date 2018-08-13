const expect=require('chai').expect;
const api=require('../helpers/api');
const data=require('../data.json');

describe('test api methods',function(){
	it('should pass if a bookmark is addedd successfully',function(){
		api.addBookmark(data,32726038);
		expect(32726038).to.equal(data[0].bookmark);
	})

	it('should pass when all bookmarks are retrieved',function(){
		api.addBookmark(data,32726038);
		api.addBookmark(data,6859964);
		api.addBookmark(data,78732259);
		let bookmarks=api.getAllBookmarks(data);
		expect(3).to.equal(bookmarks.length);
	})

	it('should pass when a bookmark is removed',function(){
		api.addBookmark(data,32726038);
		api.addBookmark(data,6859964);
		api.addBookmark(data,78732259);
		api.removeBookmark(data,32726038);
		api.removeBookmark(data,6859964);
		api.removeBookmark(data,78732259);
		let bookmarks=api.getAllBookmarks(data);
		expect(0).to.equal(bookmarks.length);
	})

})
