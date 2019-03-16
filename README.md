# Routes-EJS-and-MVC---Managing-Profile-using-Sessions

 Run npm install and hit the localhost:8080
 
Important updates added   :
● profileController.js - Controller
● myItems.ejs
● feedback.ejs
HomePage
 
 myItems Page
 Item feedback page
 
 This controller handles all user activities from adding items, removing,getting them rated and marking shipping status for each of them.
It also takes care of all validation in a responsive manner.
myItems.ejs has two forms​ - one for updating rating of the items and other one for deleting items.It also has a dynamic checkbox to view the shipment status of the particular item.
Feedback.ejs has two forms ​- one for updating the item rating and the other one to update the shipment status of the item via a checkbox.
Sign In and Sign Out:
● SignIn button on the left side of user-navigation puts the user in the session.
● SignOut Button on the user navigation removes the user from the session and renders
the homePage.
● For signIn and signOut, I have not created action parameters, rather chosen to create
separate controllers.
ProfileController has action parameters :
1. Save​ : to save item from item.ejs to myitems.ejs
2. deleteItem​ : to delete item from myitems.ejs
3. updateProfile​ : to navigate to the feedback page and render the feedback form to
update the rating of the item or it's madeIt status
4. updateRating​ : used when user attempts to change the rating of the item from the
feedback page and navigates to the myitems page when user clicks confirm rating.
5. updateFlag​ : used when user has finalised the madeIt status on the feedback
page.When the user clicks the madeIt button after checking/unchecking the checkbox on feedback page, the changes are reflected on the myitems.ejs
Feedback page has been made dynamic.It reflects the values from the userProfile inside it's ejs and changes made on the page remain consistent even when navigated back and forth among other pages.

 Session
request.session.theUser maintains the state of the user login information at every stage and is used for validation and representation purposes.
If user is not logged in, and he traverses to the item page and tries saving it, then the page redirects you to the categories page.
Dialog boxes to display the error/warning messages:
1. If user tries saving an item without having logged in, view lands on categories page showing list of items and displays a dialog showing the reason of redirect.
2. If user tries rating an item without having logged in, view lands on categories page showing list of items and displays a dialog showing the reason of redirect.
3. If user signs out, view is redirected to home showing a dialog message without an appropriate response message.
4. If user tries adding an item that already exists in his/her savedList, a dialog box with appropriate message is shown.
Security :
Values have been sent with post methods containing key values pairs that are ​hidden​ so that user has no control over which item to perform the operation on.
Secondly, the itemList is sent along with all post forms to keep track of items that are in the list and to apply updates/deletions on those items only.Comparisons with the itemList and the specific item on which operations are performed will ensure that we keep clean the system from interruptive attacks.
For this purpose an itemList has been prepared from the request.session.userProfile list.
This itemList at any point of time will contain a list of itemCode values that will be present in the userItems/request.session.userProfile.
When these values get submitted from the post method via forms, they will be validated on the controller side and response will be rendered appropriately.
The above logic has been implemented for the 4 action parameters :
1. Save​ - checked to see if the item being added is already present in list and an appropriate dialog box is shown.
2. updateRating​ - checked to see if user/hacker is attempting to modify values other than the user interface.
3. updateFlag ​- checked to see if user/hacker is attempting to modify values other than the user interface.

 4. updateProfile​ - checked to see if user/hacker is attempting to modify values other than the user interface.
Challenging parts were:
● Figuring out how to implement the action parameters.If we shy away from action parameters, we’ll have to create too many routes to handle different parameters and specific routing needs to be implemented.This is unnecessary, hence I have used action parameters which I created while building the post forms.
○
● Creating dynamic forms in the for-loop scenarios since the item values will be changed
as per the last loop.Found a work around for that and implemented it using form[i] where
i is the iteration Count.
● Creating itemList array and validating the itemCodes passed against the itemList
contents to see items operated on is valid.
------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------- --
