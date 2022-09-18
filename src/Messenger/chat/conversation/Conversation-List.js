import React from 'react';

import './Conversation-List.css';

function ConversationList() {
    return (
        <div id="conversation-list">
            <div className="conversation active">
                <img src={require("../../images/profiles/sagar.png")} alt="Daryl Duckmanton" />
                <div className="title-text">Sagar Sargar</div>
                <div className="created-date">Sept 19</div>
                <div className="conversation-message">
                    This is a message
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/kim.jpeg")} alt="Kim O'Neil" />
                <div className="title-text">Prinzu</div>
                <div className="created-date">Sept 19</div>
                <div className="conversation-message">
                    Very funny
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/kanhaiya.png")} alt="John Anderson" />
                <div className="title-text">Kanhaiya Agarwal</div>
                <div className="created-date">Sept 19</div>
                <div className="conversation-message">
                    Yes I love how Python does that
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/ben.png")} alt="Ben Smith" />
                <div className="title-text">Aman Kumar</div>
                <div className="created-date">2:49 PM</div>
                <div className="conversation-message">
                    Yeah Miami Heat are done
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/douglas.png")} alt="Douglas Johannasen" />
                <div className="title-text">Abhishek Kumar</div>
                <div className="created-date">6:14 PM</div>
                <div className="conversation-message">
                    No it does not
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/jacob.png")} alt="Jacob Manly" />
                <div className="title-text">Pranava</div>
                <div className="created-date">3 secs ago</div>
                <div className="conversation-message">
                    Just be very careful doing that
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/stacey.jpeg")} alt="Stacey Wilson" />
                <div className="title-text">Shubham</div>
                <div className="created-date">30 mins ago</div>
                <div className="conversation-message">
                    Awesome!!! Congratulations!!!!
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/stan.jpeg")} alt="Stan George" />
                <div className="title-text">Abhimanuy</div>
                <div className="created-date">1 week ago</div>
                <div className="conversation-message">
                    Good job
                </div>
            </div>
            <div className="conversation">
                <img src={require("../../images/profiles/sarah.jpeg")} alt="Sarah Momes" />
                <div className="title-text">Sarah Momes</div>
                <div className="created-date">1 year ago</div>
                <div className="conversation-message">
                    Thank you. I appreciate that.
                </div>
            </div>
        </div>
    );
}

export default ConversationList;