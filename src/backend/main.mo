import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type Message = {
    role : Text;
    content : Text;
    timestamp : Int;
  };

  module Message {
    public func fromInput(role : Text, content : Text, timestamp : Int) : Message {
      { role; content; timestamp };
    };
  };

  let chatSessions = Map.empty<Text, List.List<Message>>();
  let timetables = Map.empty<Text, Text>();

  public shared ({ caller }) func saveMessage(sessionId : Text, role : Text, content : Text, timestamp : Int) : async () {
    let message = Message.fromInput(role, content, timestamp);
    let messages = switch (chatSessions.get(sessionId)) {
      case (null) { List.fromArray<Message>([message]) };
      case (?existingMessages) {
        existingMessages.add(message);
        existingMessages;
      };
    };
    chatSessions.add(sessionId, messages);
  };

  public query ({ caller }) func getMessages(sessionId : Text) : async [Message] {
    switch (chatSessions.get(sessionId)) {
      case (null) { Runtime.trap("Session does not exist") };
      case (?messages) { messages.toArray() };
    };
  };

  public shared ({ caller }) func clearSession(sessionId : Text) : async () {
    if (chatSessions.containsKey(sessionId)) {
      chatSessions.remove(sessionId);
    } else {
      Runtime.trap("Session does not exist");
    };
  };

  public shared ({ caller }) func saveTimetable(sessionId : Text, timetable : Text) : async () {
    timetables.add(sessionId, timetable);
  };

  public query ({ caller }) func getTimetable(sessionId : Text) : async Text {
    switch (timetables.get(sessionId)) {
      case (null) { Runtime.trap("Session does not exist") };
      case (?timetable) { timetable };
    };
  };

  public query ({ caller }) func getAllSessionIds() : async [Text] {
    chatSessions.keys().toArray();
  };
};
