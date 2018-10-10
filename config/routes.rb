Rails.application.routes.draw do

  root 'lists#index'

  resources :lists, except:[:edit]
  resources :tasks

  resources :lists do
    resources :tasks
  end
end
