import Sammy from 'sammy';
import htmlHandler from 'html-handler';

import userController from 'user-controller';
import headerController from 'header-controller';
import postController from 'post-controller';

const router = (function() {
    function start() {
        const sammy = Sammy(function () {
            this.before({}, () => headerController.updateHeader());

            this.get('#/', (sammy) => sammy.redirect('#/home'));
            this.get('#/home', () => htmlHandler.setHtml('home', '#content'));

            // Account 
            this.get('#/user', userController.load);
            this.get('#/user/register', userController.loadRegisterPage);
            this.get('#/user/login', userController.loadLoginPage);

            this.post('#/user/login', userController.login);
            this.post('#/user/register', userController.register);
            this.get('#/user/logout', userController.logout);

            this.get('#user/profile/:id', userController.loadUserProfilePage);

            // Posts navigator
            this.get('#/posts/:id', postController.loadPostDetailsPage);
            this.get('#/posts/all', postController.loadFoundMoviesPage);
            
            this.get('#/posts/create', postController.loadCreatePostPage);
            this.get('#/posts/create', postController.CreatePost);
            
            this.get('#/posts/latest', postController.latestPostPage);

            // Dance Styles

            // Dance Classes

            // Other
            this.get('#/contact', () => htmlHandler.setHtml('contact', '#content'));

            this.post(/^((?!!mailto).)*$/, (sammy) => {
                const subject = sammy.params.subject;
                const message = sammy.params.message;

                window.location.href = `mailto:contacts@dance-it.com?subject=${subject}&body=${message}`;
            });

            // Not found
            this.notFound = (function () {
                htmlHandler.setHtml('404-page');
            });
        });
        $(function () {
            sammy.run('#/');
        });
    }

    return {
        start
    };
}());

export default router;