Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show, :update]
    resources :users, only: [:create, :update, :show]
    resources :photos, only: [:create, :index, :show, :update, :destroy]
  end

end

# new, create, edit, update, show, index, destroy
