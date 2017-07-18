Rails.application.routes.draw do
  root to: "static_pages#root"
  get 'users/new'

  get 'users/create'

  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

end


namespace :api, defaults: {format: :json} do
  resource :session, only: [:new, :create, :destroy, :show, :update]
  resources :users, only: [:new, :create, :update, :show, :index] #do
    # resource :follow, only: [:destroy, :create]
    # resources :photos, only: [:create]
    # get '/photos', to: 'photos#user_index'
    # get '/feed', to: 'photos#feed_index'
  # end
  # resources :photos, except: [:create]
end
