json.extract! @review, :id, :user_id, :trail_id, :rating, :text, :date, :reviewer

# json.reviewer do 
#     json.partial! "/api/users/user", user: @review.reviewer
# end 
